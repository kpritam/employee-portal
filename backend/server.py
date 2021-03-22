from flask import Flask
from flask import request
import json
from flask_cors import CORS, cross_origin

employee_details = [] 

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/employee', methods=['POST'])
def save_employees():
    employee_details.append(request.json)
    return "Ok"

@app.route('/details', methods=['GET'])
def get_details():
    return json.dumps(employee_details)

