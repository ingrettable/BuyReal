FROM python:3.7
WORKDIR /
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8080
COPY . .
#CMD ["python3", "app.py"]
CMD ["gunicorn", "app:app", "-w 2", "-b 0.0.0.0:8080", "-t 30"]
