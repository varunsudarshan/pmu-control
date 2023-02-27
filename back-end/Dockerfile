# Use the official Python 3.9 image as the base image
FROM python:3.9

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000 for the Flask app to run on
EXPOSE 5000

# Set the command to run the Flask app
CMD ["python", "server.py"]
