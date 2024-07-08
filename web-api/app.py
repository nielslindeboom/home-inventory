from flask import Flask
app = Flask(__name__)

import json;

# Load product data from JSON file
with open('product-data.json', 'r') as file:
    product_data = json.load(file)

@app.route('/')
def hello():
    return product_data

if __name__ == '__main__':
    app.run(debug=True)