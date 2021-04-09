---
title: Control Remoto
---

***Aplicación:*** cr4v-remote.local ó 192.168.1.134:8880

## Puntos de acceso

- **Broker MQTT:**: 
  - mqtt://blogdeldesarrollador.com:1883
  - mqtts://blogdeldesarrollador.com:8883
  - ws://blogdeldesarrollador.com:8083
  - wss://blogdeldesarrollador.com:8084
- **Broker MQTT Panel**:
  - http://blogdeldesarrollador.com:18083
  - https://blogdeldesarrollador.com:18084
- **DB**:
  - 192.168.1.134:3310
- **Backend API**
  - 192.168.1.134:8881
- **Backend Sockets**
  - 192.168.1.134:8882

## Archivos de despliegue

- docker-compose.yml

```yml
version: '3.8'
services:
  db:
    container_name: remote-db
    image: mariadb
    restart: always
    command: --default-authentication-plugin=mysql_native_password
    environment:
      MYSQL_ROOT_PASSWORD: XxX
      MYSQL_USER: XxX
      MYSQL_PASSWORD: XxX
      MYSQL_DATABASE: XxX
    volumes:
      - db:/var/lib/mysql
    ports:
      - 3310:3306

  backend:
    container_name: remote-backend
    image: rubenfgr/remote-backend:latest
    restart: always
    depends_on:
      - db
    environment:
      CR4VEGAS_BACK_APP_PORT: XxX
      CR4VEGAS_BACK_APP_GLOBAL_PREFIX: XxX
      CR4VEGAS_BACK_JWT_SECRET: XxX
      CR4VEGAS_BACK_MULTER_DEST: XxX
      CR4VEGAS_BACK_MQTT_URL: XxX
      CR4VEGAS_BACK_DB_TYPE: XxX
      CR4VEGAS_BACK_DB_HOST: XxX
      CR4VEGAS_BACK_DB_PORT: XxX
      CR4VEGAS_BACK_DB_USERNAME: XxX
      CR4VEGAS_BACK_DB_PASSWORD: XxX
      CR4VEGAS_BACK_DB_DATABASE: XxX
      CR4VEGAS_BACK_DB_SYNCHRONIZE: XxX
      CR4VEGAS_MQTT_HOST: XxX
    volumes:
      - backend:/usr/src/app/upload
    ports:
      - 8881:8881
      - 8882:8882

  frontend:
    container_name: remote-frontend
    image: rubenfgr/remote-frontend:latest
    restart: always
    ports:
      - 8880:80
    depends_on:
      - backend

volumes:
  db: {}
  backend: {}
```

