import glob
import os

files = glob.glob("/home/ubuntu/data_sent/*.json")
for file in files:
    print(file)
    os.system('bin/post -c OpenIR ' + file)