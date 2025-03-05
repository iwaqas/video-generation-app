FROM ruby:2.7

# Install dependencies
RUN apt-get update -qq && apt-get install -y nodejs npm

# Set the working directory
WORKDIR /app

# Copy the Podfile and install dependencies
COPY Podfile /app/
RUN pod install

# Copy the rest of the application code
COPY . /app/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]