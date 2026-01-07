# Diseño de Base de Datos (MySQL)

El sistema soporta una estructura de datos masiva con integridad referencial estricta.

### Jerarquía de Datos:
* **Nivel Geográfico:** `Ciudades` -> `Tiendas`.
* **Nivel Operativo:** `Personal` (Roles asignados por tienda).
* **Nivel Financiero:** `Compras`, `Ventas`, `Ingresos` y `Egresos` vinculados a un ID de tienda único para reportes consolidados.
