import socket
import whois
import dns.resolver
import ssl
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def dns_lookup(domain):
    records = {}
    try:
        for record_type in ['A', 'MX', 'NS', 'TXT']:
            answers = dns.resolver.resolve(domain, record_type)
            records[record_type] = [answer.to_text() for answer in answers]
            print(records[record_type])
    except Exception as e:
        records['error'] = str(e)
    return records

def whois_lookup(domain):
    try:
        return whois.whois(domain)
    except Exception as e:
        return str(e)

def ssl_info(domain):
    try:
        context = ssl.create_default_context()
        with socket.create_connection((domain, 443)) as sock:
            with context.wrap_socket(sock, server_hostname=domain) as ssock:
                cert = ssock.getpeercert()
                return cert
    except Exception as e:
        return str(e)

def http_headers(domain):
    try:
        response = requests.get(f"https://{domain}", timeout=5)
        return dict(response.headers)
    except Exception as e:
        return str(e)

def scan_domain(domain):
    if not domain or not isinstance(domain, str):
        return {"error": "Invalid domain input. Please provide a valid domain name."}

    try:
        results = {
            "domain": domain,
            "dns_records": dns_lookup(domain),
            "whois_info": whois_lookup(domain),
            "ssl_info": ssl_info(domain),
            "http_headers": http_headers(domain)
        }
        return results
    except Exception as e:
        return {"error": "An error occurred during the scan", "details": str(e)}

@app.route("/")
def home():
    return "jsonify"

@app.route("/scan", methods=['GET'])
def eval():
    domain = request.args.get('domain')
    print(domain)
    results = scan_domain(domain)
    return jsonify(results)

if __name__=="__main__":
    app.run(debug=True) 