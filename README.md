## **🌿🌿 Invernadero inteligente en Packet Tracer 🌿🌿**


Simulación de un sistema de invernadero inteligente que automatiza el control ambiental mediante sensores IoT y actuadores, gestionado a través de una red local con capacidad de monitoreo remoto.

## 📋 **Topología del Sistema**

**🌡️ Dispositivos IoT y Sensores 🌡️**

`````MCU (Microcontrolador Principal)`````

`````├── Temperature Monitor (Sensor Temperatura 0.6°C)`````

`````├── Humidity Sensor (Sensor Humedad)`````

`````├── Heating Element (Calefactor)`````

`````├── Ceiling Spreader (Ventilador Techo)`````

`````├── AC Unit (Aire Acondicionado)`````

`````└── Oil Car (Sistema Rociado)`````


**💻 Dispositivos de Monitoreo 💻**


`````Home Gateway con DHCP habilitado`````

`````├── Laptop0 (Estación Control Principal)`````

`````├── Tablet PC3/PC4 (Monitoreo Móvil)`````

`````├── Smartphone0 (Control Remoto)`````

`````└── FCPT PC3 (Estación Secundaria)`````

**⚙️ Configuraciones Implementadas**

**Conectividad de Red**

- Home Gateway con DHCP habilitado


- Red LAN para dispositivos de monitoreo
  

- Comunicación WiFi para dispositivos móviles
  

- Conexión IoT entre MCU y sensores/actuadores
  

**📊 Monitoreo y Visualización**

- Temperature Monitor: Visualización en tiempo real

- Dispositivos Móviles: Acceso remoto a datos

- Interfaz Centralizada: Control unificado desde Laptop0

**💻 Funcionalidades Principales**

- Control de Temperatura: Calefacción y refrigeración automática

- Control de Humedad: Sistema de rociado inteligente

- Monitoreo Continuo: Sensores en tiempo real 24/7

**📡 Comunicación Validada 📡**

`````bash`````
`````# Pruebas de conectividad implementadas
Ping: MCU ↔ Sensores ✓
Ping: Gateway ↔ Dispositivos ✓
Ping: Red LAN ↔ IoT ✓
`````

✓Comunicación IoT	estable	sin pérdida de paquetes

✓Control Temperatura	funcional	con respuesta en <2 segundos

✓Control Humedad	operativo	con precisión ±5%

✓Acceso Remoto multiplataforma	confirmado	



## Integrantes del Desarrollo

| Nombre              | GitHub                                     |
|---------------------|--------------------------------------------|
| 👩‍💻 Ana Laura Giraudo  | [Lalygiraudo](https://github.com/Lalygiraudo)         |
| 👨‍💻 Fabricio Palacios  | [FabricioPalacios](https://github.com/FabricioPalacios) |
| 👩‍💻 Gabriela Bergagna  | [gabybergagna](https://github.com/gabybergagna)          |        
| 👨‍💻 Mariano Barboza    | [marianombarboza](https://github.com/marianombarboza)     |
| 👨‍💻 Patricio Henrry   | [PatricioHenrry](https://github.com/PatricioHenrry)      |


