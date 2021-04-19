from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbmemo

## HTML을 주는 부분
@app.route('/')
def home():
   return render_template('index.html')

@app.route('/category', methods=['POST'])
def listing():
    new_category = request.form['category_name']
    print(new_category)

    doc = { "name": new_category }

    db.category.insert_one(doc)



if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)