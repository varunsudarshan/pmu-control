from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = [
    "hello"
]
@app.route('/api/data', methods=['GET', 'POST'])
def handle_data():
    if request.method == 'GET':
        return jsonify(data)
    elif request.method == 'POST':
        new_data = request.json
        data.append(new_data)
        return jsonify(new_data), 201


if __name__ == '__main__':
    app.run(debug=True)
