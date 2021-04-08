from flask import Flask
import requests
import pycountry
from flask_cors import CORS


import gensim
import nltk
nltk.download('wordnet')
from nltk.corpus import wordnet as wn
from nltk.stem.wordnet import WordNetLemmatizer
nltk.download('stopwords')
en_stop = set(nltk.corpus.stopwords.words('english'))
import random
from gensim import corpora
import pickle


def tokenize(text):
    lda_tokens = []
    tokens = text.split()
    for token in tokens:
        if token == " ":
            continue
        elif token.startswith("http"):
            lda_tokens.append('URL')
        elif token.startswith('@'):
            lda_tokens.append('SCREEN_NAME')
        else:
            lda_tokens.append(token.lower())
    return lda_tokens


def get_lemma(word):
    lemma = wn.morphy(word)
    if lemma is None:
        return word
    else:
        return lemma
    
def get_lemma2(word):
    return WordNetLemmatizer().lemmatize(word)


def prepare_text_for_lda(text):
    tokens = tokenize(text)
    tokens = [token for token in tokens if len(token) > 4]
    tokens = [token for token in tokens if token not in en_stop]
    tokens = [get_lemma(token) for token in tokens]
    return tokens


app = Flask(__name__)
CORS(app)

input_countries = ['American Samoa', 'Canada', 'France']

countries = {}
for country in pycountry.countries:
    countries[country.name] = country.alpha_2

codes = [countries.get(country, 'Unknown code') for country in input_countries]

convert_ISO_3166_2_to_1 = {
'AF':'AFG',
'AX':'ALA',
'AL':'ALB',
'DZ':'DZA',
'AS':'ASM',
'AD':'AND',
'AO':'AGO',
'AI':'AIA',
'AQ':'ATA',
'AG':'ATG',
'AR':'ARG',
'AM':'ARM',
'AW':'ABW',
'AU':'AUS',
'AT':'AUT',
'AZ':'AZE',
'BS':'BHS',
'BH':'BHR',
'BD':'BGD',
'BB':'BRB',
'BY':'BLR',
'BE':'BEL',
'BZ':'BLZ',
'BJ':'BEN',
'BM':'BMU',
'BT':'BTN',
'BO':'BOL',
'BA':'BIH',
'BW':'BWA',
'BV':'BVT',
'BR':'BRA',
'IO':'IOT',
'BN':'BRN',
'BG':'BGR',
'BF':'BFA',
'BI':'BDI',
'KH':'KHM',
'CM':'CMR',
'CA':'CAN',
'CV':'CPV',
'KY':'CYM',
'CF':'CAF',
'TD':'TCD',
'CL':'CHL',
'CN':'CHN',
'CX':'CXR',
'CC':'CCK',
'CO':'COL',
'KM':'COM',
'CG':'COG',
'CD':'COD',
'CK':'COK',
'CR':'CRI',
'CI':'CIV',
'HR':'HRV',
'CU':'CUB',
'CY':'CYP',
'CZ':'CZE',
'DK':'DNK',
'DJ':'DJI',
'DM':'DMA',
'DO':'DOM',
'EC':'ECU',
'EG':'EGY',
'SV':'SLV',
'GQ':'GNQ',
'ER':'ERI',
'EE':'EST',
'ET':'ETH',
'FK':'FLK',
'FO':'FRO',
'FJ':'FJI',
'FI':'FIN',
'FR':'FRA',
'GF':'GUF',
'PF':'PYF',
'TF':'ATF',
'GA':'GAB',
'GM':'GMB',
'GE':'GEO',
'DE':'DEU',
'GH':'GHA',
'GI':'GIB',
'GR':'GRC',
'GL':'GRL',
'GD':'GRD',
'GP':'GLP',
'GU':'GUM',
'GT':'GTM',
'GG':'GGY',
'GN':'GIN',
'GW':'GNB',
'GY':'GUY',
'HT':'HTI',
'HM':'HMD',
'VA':'VAT',
'HN':'HND',
'HK':'HKG',
'HU':'HUN',
'IS':'ISL',
'IN':'IND',
'ID':'IDN',
'IR':'IRN',
'IQ':'IRQ',
'IE':'IRL',
'IM':'IMN',
'IL':'ISR',
'IT':'ITA',
'JM':'JAM',
'JP':'JPN',
'JE':'JEY',
'JO':'JOR',
'KZ':'KAZ',
'KE':'KEN',
'KI':'KIR',
'KP':'PRK',
'KR':'KOR',
'KW':'KWT',
'KG':'KGZ',
'LA':'LAO',
'LV':'LVA',
'LB':'LBN',
'LS':'LSO',
'LR':'LBR',
'LY':'LBY',
'LI':'LIE',
'LT':'LTU',
'LU':'LUX',
'MO':'MAC',
'MK':'MKD',
'MG':'MDG',
'MW':'MWI',
'MY':'MYS',
'MV':'MDV',
'ML':'MLI',
'MT':'MLT',
'MH':'MHL',
'MQ':'MTQ',
'MR':'MRT',
'MU':'MUS',
'YT':'MYT',
'MX':'MEX',
'FM':'FSM',
'MD':'MDA',
'MC':'MCO',
'MN':'MNG',
'ME':'MNE',
'MS':'MSR',
'MA':'MAR',
'MZ':'MOZ',
'MM':'MMR',
'NA':'NAM',
'NR':'NRU',
'NP':'NPL',
'NL':'NLD',
'AN':'ANT',
'NC':'NCL',
'NZ':'NZL',
'NI':'NIC',
'NE':'NER',
'NG':'NGA',
'NU':'NIU',
'NF':'NFK',
'MP':'MNP',
'NO':'NOR',
'OM':'OMN',
'PK':'PAK',
'PW':'PLW',
'PS':'PSE',
'PA':'PAN',
'PG':'PNG',
'PY':'PRY',
'PE':'PER',
'PH':'PHL',
'PN':'PCN',
'PL':'POL',
'PT':'PRT',
'PR':'PRI',
'QA':'QAT',
'RE':'REU',
'RO':'ROU',
'RU':'RUS',
'RW':'RWA',
'BL':'BLM',
'SH':'SHN',
'KN':'KNA',
'LC':'LCA',
'MF':'MAF',
'PM':'SPM',
'VC':'VCT',
'WS':'WSM',
'SM':'SMR',
'ST':'STP',
'SA':'SAU',
'SN':'SEN',
'RS':'SRB',
'SC':'SYC',
'SL':'SLE',
'SG':'SGP',
'SK':'SVK',
'SI':'SVN',
'SB':'SLB',
'SO':'SOM',
'ZA':'ZAF',
'GS':'SGS',
'ES':'ESP',
'LK':'LKA',
'SD':'SDN',
'SR':'SUR',
'SJ':'SJM',
'SZ':'SWZ',
'SE':'SWE',
'CH':'CHE',
'SY':'SYR',
'TW':'TWN',
'TJ':'TJK',
'TZ':'TZA',
'TH':'THA',
'TL':'TLS',
'TG':'TGO',
'TK':'TKL',
'TO':'TON',
'TT':'TTO',
'TN':'TUN',
'TR':'TUR',
'TM':'TKM',
'TC':'TCA',
'TV':'TUV',
'UG':'UGA',
'UA':'UKR',
'AE':'ARE',
'GB':'GBR',
'US':'USA',
'UM':'UMI',
'UY':'URY',
'UZ':'UZB',
'VU':'VUT',
'VE':'VEN',
'VN':'VNM',
'VG':'VGB',
'VI':'VIR',
'WF':'WLF',
'EH':'ESH',
'YE':'YEM',
'ZM':'ZMB',
'ZW':'ZWE'
}

data_dic = {
        "usa":"USA",
        "australia":"AUS",
        "canada":"CAN",
        "india":"IND",
        "china":"CHN",
        "sweden":"SWE",
        "new":"NZL",
        "zealand":"NZL",
        "iran":"IRN",
        "africa":"ZAF",
        "south":"ZAF",
        "italy":"ITA",
        "argentina":"ARG",
        "iraq":"IRQ",
        "afghanistan":"AFG",
        "libya":"LBY",
        "finland":"FIN",
        "norway":"NOR",
        "egypt":"EGY",
        "zimbabwe":"ZWE",
        "uk":"GBR",
        "sudan":"SDN",
        "germany":"DEU",
        "brazil":"BRA",
        "france":"FRA",
        "spain":"ESP",
        "russia":"RUS"
}

from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)

@app.route('/country_data/<query>')
@cross_origin()
def country_data(query):
    resp = requests.get('http://3.131.141.10:8983/solr/tweets/select?q='+query+'&df=country&facet.field=country&facet=on&q=*%3A*&rows=0')
    content = resp.json()
    results = content["facet_counts"]["facet_fields"]["country"]
    dic = {"data":[]}
    
    for country in pycountry.countries:
        countries[country.name] = country.alpha_2

    for i in range(0,len(results),2):
        dic["data"].append([data_dic[results[i]], results[i+1]])
        
    return dic

@app.route('/get_News/<query>')
@cross_origin()
def get_News(query):
    key = "b3c99b1aa8694a14abee65cfb7b0bc52" # "0b73d59bb8114d7991582ea5a3a81c13" // ce00d8c7a7ff4fc587fe9de9ebcbde08
    resp = requests.get("http://newsapi.org/v2/everything?q="+query+"&from=2020-11-11&sortBy=publishedAt&apiKey=" + key)
    return resp.json()

@app.route('/get_topics/<query>')
@cross_origin()
def get_topics(query):
    dictionary = corpora.Dictionary.load('dictionary.gensim')
    NUM_TOPICS = 50
    ldamodel = gensim.models.LdaModel.load('model10_final.gensim')
    x=ldamodel.show_topics(num_topics=50, num_words=5,formatted=False)
    topics_words = [(tp[0], [wd[0] for wd in tp[1]]) for tp in x]

    new_doc = query
    new_doc = prepare_text_for_lda(new_doc)
    new_doc_bow = dictionary.doc2bow(new_doc)
    li = []
    for doc in new_doc_bow:
        if(doc[0] >= 731):
            item = 731
        else:
            item = doc[0]
        li.append(tuple([item,doc[1]]))
    topic_list = ldamodel.get_document_topics(li)
    words = []
    for i in topic_list:
        print(i[0], len(topics_words))
        if(i[0] in range(len(topics_words))):
            words.extend(topics_words[i[0]][1])
    dics = {"topics": words}
    return dics

@app.route('/covid_data/<screen_name>')
@cross_origin()
def covid_data(screen_name):
    resp = requests.get('http://3.131.141.10:8983/solr/tweets/select?facet.field=created_at&facet=on&fl=full_text&fq=user.screen_name%3A'+ screen_name +'&q=full_text%3Acoronavirus%20full_text%3Acorona%20full_text%3Avirus%20full_text%3Acovid&rows=0')
    resp_noncovid = requests.get('http://3.131.141.10:8983/solr/tweets/select?facet.field=created_at&facet=on&fq=user.screen_name%3A'+ screen_name +'&q=-full_text%3Acovid%0A-full_text%3Acoronavirus%0A-full_text%3Acorona%0A-full_text%3Avirus%0A-full_text%3ASARS&rows=0')
    content = resp.json()
    content2 = resp_noncovid.json()
    results = content["facet_counts"]["facet_fields"]["created_at"]
    results2 = content2["facet_counts"]["facet_fields"]["created_at"]
    months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    dic = {"data":{
        "covid":{},
        "non_covid":{}
        }
        }
    sub = {
        "data":{
        "covid":[],
        "non_covid":[],
        "normalized":[]
        }
        }
    for i in range(0,len(results),2):
        if(results[i] in months):
            dic["data"]["covid"][results[i]] =  results[i+1]
    for i in range(0,len(results2),2):
        if(results2[i] in months):
            dic["data"]["non_covid"][results2[i]] = results2[i+1]
    
    for i in months:
        if i in dic["data"]["covid"]:
            sub["data"]["covid"].append(dic["data"]["covid"][i])
        else:
            sub["data"]["covid"].append(0)

        if i in dic["data"]["non_covid"]:
            sub["data"]["non_covid"].append(dic["data"]["non_covid"][i])
        else:
            sub["data"]["non_covid"].append(0)

        if(dic["data"]["non_covid"][i] + dic["data"]["covid"][i] == 0):
            norm = 0
        else:
            norm = (2 * dic["data"]["non_covid"][i] * dic["data"]["covid"][i])/(dic["data"]["non_covid"][i] + dic["data"]["covid"][i])
        sub["data"]["normalized"].append(norm)
    return sub



