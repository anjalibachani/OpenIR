import nltk
nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer
sentences = ["With elections in Bengal barely months away, MamataBanerjee can ill afford to lose her heavyweight minister of Nandigram fame.",

"RT @CosmoIndia: https://t.co/SnCol6Jf8X",
"@NapolitanoIda @GigioSweet17 c'è uno sforzo enorme da parte di tutti. A partire da chi lotta in prima linea. Nell’ultima settimana, tra il 23 ed il 29 marzo, la media giornaliera di mascherine consegnate alle regioni è stata di 3.59 milioni di pezzi"
]

import operator
# import goslate
# gs = goslate.Goslate()
from langdetect import detect
from google_trans_new import google_translator
langs = ["it","en","hi"]

sentences = ["I am happy to the nearly 450,000 Americans who have completed the screening registry to volunteer for COVID-19 vaccine clinical trials. Trials are continuing to enroll and we need more volunteers. Volunteer here: https://t.co/RjzpNP8EvT"]

sid = SentimentIntensityAnalyzer()
translator = google_translator()
for sentence in sentences:
    if(len(sentence) > 0):
        print(sentence)
        print(translator.translate(sentence))
        print("Language", detect(sentence))
        ss = sid.polarity_scores(sentence) # gs.translate(sentence, 'en'))
        ss['compound'] = 0
        print(ss)
        print(max(ss.items(), key=operator.itemgetter(1))[0])

