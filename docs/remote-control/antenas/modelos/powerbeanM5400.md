---
title: Ubiquitti PowerBean M5 400
---

## Configuración por defecto

- **IP**: 192.168.1.20
- **Usuario**: ubnt
- **Contraseña**: ubnt

---

**IMPORTANTE: **

- En cada pestaña se deben aplicar los cambios

---

## [[AP]] Punto de acceso. Paso a paso

1. LOGIN

   ![pap1](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap1.jpg)

2. SYSTEM

   - Actualizar el Firmware

     Seleccionar archivo > cargar > actualizar (IMPORTANTE: No apagar/reiniciar el equipo durante la actualización)

     ![pap2](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap2.jpg)

     ![pap3](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap3.jpg)

   - Cambiar los datos del usuario, fecha, hora y más...

   ![pap5](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap5.jpg)

3. WIRELESS

   Desactivar el cálculo del límite EIRP (límites reglamentados en potencia de salida para interiores y exteriores) y aumentar la potencia de salida a 26 dBm

   IMPORTANTE: Esta configuración es para alineación y debe ser modificada a posteriori ya que no esta en los límites soportados

   ![pap4](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap4.jpg)

4. NETWORK

   ![pap9](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap9.jpg)

5. ADVANCED

   IMPORTANTE: Quizás sea necesario realizar dos cambios y aplicar para aumentar la distancia hasta 32.5 millas

   ![pap6](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap6.jpg)

6. SERVICES

   Deshabilitar SSH (evitar conexión por terminal remoto) y CDP (evitar que otros equipos puedan ver datos de interés)

   ![pap7](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap7.jpg)

7. **Aplicar todos los cambios**
8. Utilizar la herramienta de "Encuesta del sitio" para escanear redes WiFi disponibles

## [[Station]] Estación. Paso a paso

1. LOGIN (MISMOS PASOS QUE EN AP)

2. SYSTEM

   - Actualizar el Firmware (MISMOS PASOS QUE EN AP)
   - Cambiar datos de usuario, fecha, coordenadas, etc...

   ![pap10](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap10.jpg)

3. ADVANCED

   ![pap11](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap11.jpg)

4. SERVICES

   ![pap12](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap12.jpg)

   ![pap13](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap13.jpg)

5. NESTWORK

   ![pap15](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap15.jpg)

6. WIRELESS

   - Seleccionar el modo inalámbrico "Estación" y seleccionar la otra antena por su SSID (debe estar encendida)

   ![pap14](../../../../static/img/remote-control/antenas/modelos/powerbeanM5400/pap14.jpg)

   **IMPORTANTE:** Una vez que se enlazan será necesario desconectar una de las antenas del switch ya que se puede acceder desde la otra y en caso de no hacerlo existe conflicto de IPs

## [[Afinar la señal]]

**Jugar con los canales DFS exteriores (En españa se permiten hasta 30 dBm de potencia de señal)**

