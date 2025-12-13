import psycopg2 # type: ignore
import os

def get_db():
    return psycopg2.connect(os.environ["DB_URL"])

# Link to sql


