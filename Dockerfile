FROM openjdk:8

COPY ./target/sportitup-0.0.1-SNAPSHOT.jar sportitup-0.0.1-SNAPSHOT.jar

WORKDIR ./
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "sportitup-0.0.1-SNAPSHOT.jar"]
