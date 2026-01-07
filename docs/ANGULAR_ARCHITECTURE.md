# Arquitectura Frontend (Angular)

Para este ERP, se optó por una arquitectura modular basada en **Feature Modules** para facilitar el mantenimiento por diferentes equipos.

### Puntos Clave:
1. **Core Module:** Contiene servicios únicos (Singletons) como autenticación y manejo de errores.
2. **Shared Module:** Componentes reutilizables como tablas dinámicas y pipes de moneda.
3. **Lazy Loading:** Los módulos de `Ingresos`, `Egresos` y `Personal` solo se cargan cuando el usuario accede a ellos, reduciendo el peso inicial de la app en un 60%.
