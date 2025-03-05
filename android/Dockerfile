FROM openjdk:11-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the Gradle build files
COPY build.gradle settings.gradle ./

# Copy the source code
COPY app/src ./app/src

# Install Gradle
RUN apt-get update && apt-get install -y gradle

# Build the application
RUN gradle build

# Expose the application port
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app/build/libs/*.jar"]