import spacy
spacy.load('en_core_web_sm')
from spacy.lang.en import English
parser = English()
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
    tokens = parser(text)
    for token in tokens:
        if token.orth_.isspace():
            continue
        elif token.like_url:
            lda_tokens.append('URL')
        elif token.orth_.startswith('@'):
            lda_tokens.append('SCREEN_NAME')
        else:
            lda_tokens.append(token.lower_)
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

text_data = []
with open('dataset.txt',encoding="utf-8") as f:
    for line in f:
        tokens = prepare_text_for_lda(line)
        if random.random() > .99:
            text_data.append(tokens)

dictionary = corpora.Dictionary.load('dictionary.gensim')

NUM_TOPICS = 50
ldamodel = gensim.models.LdaModel.load('model10_final.gensim')
x=ldamodel.show_topics(num_topics=50, num_words=5,formatted=False)
topics_words = [(tp[0], [wd[0] for wd in tp[1]]) for tp in x]

new_doc = "RT @SecAzar: With today's announcement from Moderna, we'll now have two potential COVID-19 vaccines being reviewed by @US_FDA for emergency…"
new_doc = prepare_text_for_lda(new_doc)
new_doc_bow = dictionary.doc2bow(new_doc)

topic_list = ldamodel.get_document_topics(new_doc_bow)
words = []
for i in topic_list:
    words.extend(topics_words[i[0]][1])
print(words)