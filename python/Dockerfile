#import official python image from registery
FROM python:3.9

#set the default working directory
WORKDIR /app

#copy the requirements file into the image
COPY requirements.txt requirements.txt

#pip install all the dependencies for this python app
RUN pip install -r requirements.txt

#copy all the source code located in the current directory and copies them into the image
COPY . .

#host is specified to make the application visible from outside container
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]


#CMD ["python3", "./main.py"]