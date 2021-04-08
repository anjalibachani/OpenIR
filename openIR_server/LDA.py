import requests
resp = requests.get('http://3.131.141.10:8983/solr/tweets/select?fl=full_text&q=full_text%3A*&rows=10000')
with open("dataset.txt", "w+", encoding="utf-8") as out:
    if resp.status_code != 200:
        # This means something went wrong.
        raise 'GET /tasks/ {}'.format(resp.status_code)
    content = resp.json()
    rows = content["response"]["docs"]
    for row in rows:
        if(len(row["full_text"][0]) > 0):
            text = row["full_text"][0]
            text = text.replace("\n"," ")
            out.write(text + "\n")
