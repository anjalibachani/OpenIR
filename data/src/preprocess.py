

from os import listdir
from os.path import isfile, join
import json
import emoji
from datetime import datetime, timedelta
import regex
import dateutil.parser
from nltk.corpus import stopwords
from HindiTokenizer import Tokenizer
from os import walk




def getEmoji(text):
    emoji_list = []
    data = regex.findall(r'\X', text)
    for word in data:
        if any(char in emoji.UNICODE_EMOJI for char in word):
            print("removed emoji", word);
            emoji_list.append(word)
    return emoji_list

def split_count(text):
    emoji_list = []
    data = regex.findall(r'\X', text)
    for word in data:
        if any(char in emoji.UNICODE_EMOJI for char in word):
            print("removed emoji", word);
            continue
        else:
            emoji_list.append(word)
    return "".join(emoji_list)

def extract_emoticons(text):
    pattern = ''':\)|:-\)|:\(|:-\(|;\);-\)|:-O|8-|:P|:D|:\||:S|:\$|:@|8o\||\+o\(|\(H\)|\(C\)|\(\?\)'''
    return regex.sub(pattern,"",text)

def get_emoticons(text):
    pattern = ''':\)|:-\)|:\(|:-\(|;\);-\)|:-O|8-|:P|:D|:\||:S|:\$|:@|8o\||\+o\(|\(H\)|\(C\)|\(\?\)'''
    return regex.findall(pattern,text)

def hour_rounder(t):
    # Rounds to nearest hour by adding a timedelta hour if minute >= 30
    return (t.replace(second=0, microsecond=0, minute=0, hour=t.hour)
               +timedelta(hours=t.minute//30))

lang = {
    "en" : "english",
    "it" : "italian"
}

mypath = "C:/Users/Bhavin Jawade/Documents/Courses/Information Retrieval/Project/Project1/tweets/combined"

stopwordshindi = []
with open("hindiST.txt", "r", encoding="utf8") as outfile:
    stopwordshindi = []
    for word in outfile.readlines():
        stopwordshindi.append(word.rstrip())
stopwordshindi = set(stopwordshindi)

tweet_c = 0
retweet_c = 0

f = []
for (dirpath, dirnames, filenames) in walk(mypath):
    f.extend(dirpath + filenames)
    break

for file in f:
    with open(file, "w+") as infile:
        with open(file, "r") as outfile:
            data = outfile.readlines()
            for t in data:
                tweet = json.loads(t)

                if("text_en" in tweet):
                    without_punc = tweet["text_en"]
                elif("text_hi" in tweet):
                    without_punc = tweet["text_hi"]
                elif("text_it" in tweet):
                    without_punc = tweet["text_it"]
                
                tweet["tweet_text"] = tweet["full_text"]
                #without_punc = tweet["tweet_text"]
                tweet["poi_name"] = tweet["user"]["screen_name"]
                tweet["poi_id"] = tweet["user"]["id"]
                tweet["tweet_lang"] = tweet["lang"]
                tweet["country"] = "Italy"
                tweet["hashtags"] = []
                for hashtag in tweet["entities"]["hashtags"]:
                    tweet["hashtags"].append(hashtag["text"])
                
                tweet["mentions"] = []
                for user in tweet["entities"]["user_mentions"]:
                    tweet["mentions"].append(user["screen_name"])
                
                tweet["influencer_score"] = 1 # tweet["users"]["followers_count"] 
                tweet["sentiment"] = "Neutral"
                tweet["tweet_urls"] = []
                for url in tweet["entities"]["urls"]:
                    tweet["tweet_urls"].append(url["url"])
                
                tweet["tweet_emoticons"] = []
                for emoticon in getEmoji(tweet["full_text"]):
                    tweet["tweet_emoticons"].append(emoticon)
                    
                if(len(get_emoticons(tweet["full_text"])) > 0):
                    for emoticon in get_emoticons(tweet["full_text"]):
                        tweet["tweet_emoticons"].append(emoticon)
                
                output_date = dateutil.parser.parse(tweet["created_at"])
                tweet["tweet_date"] = hour_rounder(output_date).strftime("%Y-%m-%dT%H:%M:%SZ")
                if("tweet_lang" not in tweet):
                    tweet["tweet_lang"] = tweet["lang"]

                if(tweet["tweet_lang"] in lang):
                    without_punc = regex.sub(r'[^\w\s!#!@]','',without_punc, regex.UNICODE)
                    filtered_words = [word for word in without_punc.split(" ") if word.lower() not in stopwords.words(lang[tweet["tweet_lang"]])] 
                    filtered_words = [x for x in filtered_words if x]
                    copy = []
                    for word in filtered_words:
                        if(word.startswith("#") or word.startswith("@") or word.startswith("http")):
                            continue
                        else:
                            copy.append(word)
                    filtered_words = copy
                    #print(filtered_words,tweet["tweet_lang"]) 
                    temp = " ".join(filtered_words)
                    filtered_words = [word for word in temp.split(" ") if word.lower() not in stopwords.words("english")] 
                    filtered = [x for x in filtered_words if x]
                    tweet["text_"+tweet["tweet_lang"]] = " ".join(filtered)
                    without_punc = extract_emoticons(tweet["text_"+tweet["tweet_lang"]])
                    without_punc = split_count(without_punc)
                    without_punc = without_punc.split('\n')
                    without_punc = " ".join(without_punc)
                    tweet["text_"+tweet["tweet_lang"]] = without_punc
                    if("the" in tweet["text_"+tweet["tweet_lang"]].split(" ") or "The" in tweet["text_"+tweet["tweet_lang"]].split(" ")):
                        print("The found - ",tweet["text_"+tweet["tweet_lang"]])

                elif(tweet["tweet_lang"] == "hi"):
                    removedlist = []
                    for word in (without_punc.split(" ")):
                        if word not in stopwordshindi:
                            removedlist.append(word)
                    copy = []
                    for word in removedlist:
                        if(word.startswith("#") or word.startswith("@") or word.startswith("http")):
                            continue
                        else:
                            copy.append(word)
                    tweet["text_hi"] = " ".join(copy)
                    without_punc = extract_emoticons(tweet["text_hi"])
                    without_punc = split_count(without_punc)
                    without_punc = regex.sub(r'[^\w\s!#!@]','',without_punc, regex.UNICODE)
                    without_punc = without_punc.split('\n')
                    without_punc = " ".join(without_punc)
                    tweet["text_hi"] = without_punc

                else:
                    without_punc = regex.sub(r'[^\w\s!#!@]','',without_punc, regex.UNICODE)
                    filtered_words = [word for word in without_punc.split(" ") if word.lower() not in stopwords.words("english")] 
                    filtered_words = [x for x in filtered_words if x]
                    copy = []
                    for word in filtered_words:
                        if(word.startswith("#") or word.startswith("@") or word.startswith("http")):
                            continue
                        else:
                            copy.append(word)
                    filtered_words = copy
                    tweet["text_en"] = " ".join(filtered_words)
                    filtered_words = [word for word in tweet["text_en"].split(" ") if word.lower() not in stopwords.words("english")]
                    filtered = [x for x in filtered_words if x]
                    tweet["text_en"] = " ".join(filtered)
                    without_punc = extract_emoticons(tweet["text_en"])
                    without_punc = split_count(without_punc)
                    without_punc = without_punc.split('\n')
                    without_punc = " ".join(without_punc)
                    tweet["text_en"] = without_punc                   
                    if("the" in tweet["text_en"].split(" ") or "The" in tweet["text_en"].split(" ")):
                        print("The found - ",tweet["text_en"])
                    
                tweet_c += 1
                infile.write(json.dumps(tweet))
                infile.write("\n")
                print(tweet_c)