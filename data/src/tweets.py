import twitter
import json
import sys
import random
import string
import time
import os
def get_random_string(length):
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str

def get_user_tweets(api=None, screen_name=None,lang="hi",counter=200):
    count = 0
    timeline = api.GetUserTimeline(screen_name=screen_name, count=counter)
    earliest_tweet = min(timeline, key=lambda x: x.id).id
    print("getting tweets before:", earliest_tweet)
    count += counter
    while (count != 6000):
        tweets = api.GetUserTimeline(
            screen_name=screen_name, max_id=earliest_tweet, count=counter,
        )
        new_earliest = min(tweets, key=lambda x: x.id).id

        if not tweets or new_earliest == earliest_tweet:
            break
        else:
            earliest_tweet = new_earliest
            print("getting tweets before:", earliest_tweet)
            timeline += tweets
        count+=counter

    return timeline

def get_tweets(api=None, raw_query=None, lang=None,counter=100,max_tweets=5000):
    count = 0
    i = 0
    timeline = api.GetSearch(raw_query="q=" + raw_query + "&lang="+lang+"&since=2020-04-01&count="+str(counter))
    earliest_tweet = min(timeline, key=lambda x: x.id).id
    print("getting tweets before:", earliest_tweet)
    print("tweet count", len(timeline))
    count += counter 
    while (count != max_tweets):
        i=i+1
        #time.sleep(2)
        print("api-call",i)
        tweets = api.GetSearch(raw_query="q=" + raw_query + "&lang="+lang+"&since=2020-04-01&count="+str(counter)+"&max_id="+str(earliest_tweet))
        new_earliest = min(tweets, key=lambda x: x.id).id
        if not tweets or new_earliest == earliest_tweet:
            print(tweets, new_earliest, earliest_tweet)
            break
        else:
            earliest_tweet = new_earliest
            print("getting tweets before:", earliest_tweet)
            timeline += tweets
        count+=counter

    return timeline

def get_raw_tweet(api,raw_query="covid%20india%20OR%20covidindia%20OR%20govindia%20OR%20indian",counter=1000,max_tweets=20000):
    count = 0
    timeline = api.GetSearch(raw_query="q=" + raw_query + "&count="+str(counter))
    earliest_tweet = min(timeline, key=lambda x: x.id).id
    print("getting tweets before:", earliest_tweet)
    count += counter 
    while (count != max_tweets):
        tweets = api.GetSearch(raw_query="q=" + raw_query + "&count="+str(counter)+"&max_id="+str(earliest_tweet))
        new_earliest = min(tweets, key=lambda x: x.id).id
        if not tweets or new_earliest == earliest_tweet:
            print(tweets, new_earliest, earliest_tweet)
            break
        else:
            earliest_tweet = new_earliest
            print("getting tweets before:", earliest_tweet)
            timeline += tweets
        count+=counter

    return timeline

api = twitter.Api(
    consumer_key="wtvyqwZFFkkl6YHbRY0EwI384",
    consumer_secret="aK3NWhpTw3F2hwnwhUBqFCRlQ3EdAlO7aVoP3MNSeiCUev4Ul7",
    access_token_key="1374704413-dcyNEs1zmJLsYbAxgCRLUtT3uJftGAguofduoLL",
    access_token_secret="gOrcA9sxHUsKw85lkh4K0XyeUf1AgMbQdykksCjBdEdku",
    tweet_mode= 'extended',
    sleep_on_rate_limit=True
)

# bearer token: AAAAAAAAAAAAAAAAAAAAACKSHQEAAAAA5ap%2FRBF6XLs4Frfg9RWZuoyTiPc%3D1qxcHNPxNd5X4GWDLQQD69rh3zgG2ybFWfaBZGFSi1h0GRhI52

screen_name = "@giuseppeconteit"
lang = "en"
country = "USA"

hashtags = '''america%20pandemic
usa%20pandemic
america%20covid
usa%20covid
america%20coronavirus
usa%20coronavirus
US%20government%20covid
trump%20covid
realdonaldtrump%20covid
usa%20corona%20policy
USFightsCovid
newyork%20covid
Cuomo%20covid
newyork%20coronavirus
new%20york%20covid
usa%20tests
usa%20positive
arizona%20covid
california%20covid
'''


for query in hashtags.split("\n"):
    wor = query
    print(wor)

    words_to_search_or=[
        wor + "%20-RT"
        ]
    for word in words_to_search_or[1:]:
        query = query + "%20OR%20" + word

    timeline = get_tweets(api,raw_query=query,lang=lang)
    # timeline = get_raw_tweet(api,"%22%23COVID19%20UPDATE%20%22&lang=hi")
    # timeline = api.GetSearch(raw_query="q=" + query + "%20&lang="+lang+"&result_type=recent&count=100")

    file_name = country + "_COVID_" + get_random_string(8)
    # timeline = get_user_tweets(api=api, screen_name=screen_name, lang=lang)
    if os.path.exists("../tweets/"+file_name+'.json'):
        append_write = 'a' # append if already exists
    else:
        append_write = 'w' # make a new file if not
    with open("../tweets/"+file_name+'.json', append_write) as f:
        for tweet in timeline:
            tweet = tweet._json
            if (tweet['in_reply_to_screen_name'] == None):
                    if(not tweet['retweeted']):
                        tweet['tweet_type'] = 'tweet'
                    else:
                        tweet['tweet_type'] = 'retweet'
            else:
                tweet['tweet_type'] = 'reply'
            tweet['country'] = country
            f.write(json.dumps(tweet))
            f.write('\n')