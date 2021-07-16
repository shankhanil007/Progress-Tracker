from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.files import File
import json
import collections
import pandas as pd

# import speech_recognition as sr

@csrf_exempt
def display(request): 

    f = open("E:\Code for Good\eeam-88\django_part\home\Questions.txt", 'r')
    if f.mode == 'r':
        a =f.read()
        # Stopwords
        stopwords = set(line.strip() for line in open("E:\Code for Good\eeam-88\django_part\home\stopwords.txt",'r'))
        stopwords = stopwords.union(set(['mr','mrs','one','two','said']))
        # Instantiate a dictionary, and for every word in the file, 
        # Add to the dictionary if it doesn't exist. If it does, increase the count.
        wordcount = {}
        # To eliminate duplicates, remember to split by punctuation, and use case demiliters.
        for word in a.lower().split():
            word = word.replace(".","")
            word = word.replace(",","")
            word = word.replace(":","")
            word = word.replace("\"","")
            word = word.replace("!","")
            word = word.replace("â€œ","")
            word = word.replace("â€˜","")
            word = word.replace("*","")
            if word not in stopwords:
                if word not in wordcount:
                    wordcount[word] = 1
                else:
                    wordcount[word] += 1
        # Print most common word
        word_counter = collections.Counter(wordcount)

        data = []

        for word, count in word_counter.most_common(100):
            data.append({'text' :word,
            'value' : count})
        # Close the file
        f.close()


        return JsonResponse(data, safe=False)




    

