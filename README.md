<div align="center" width="100%">
    <h1>Gestión de Socios</h1>
    <img src="https://img.shields.io/badge/Version-0.0.1-blue.svg" alt="Version">
    <p><em>Sistema de gestión y administración de socios</em></p>
</div>

## 📋 Descripción

Sistema web para la gestión integral de socios, construido con Angular 17 y Express.js. Permite administrar miembros, sus datos personales y el estado de su membresía de forma eficiente y segura.

## ✨ Características

- **Gestión de usuarios**: Registro, consulta y administración de socios
- **Autenticación segura**: Integración con Auth0 para autenticación robusta
- **Base de datos**: PostgreSQL con Drizzle ORM para manejo eficiente de datos
- **Interfaz moderna**: Angular 17 con Server-Side Rendering (SSR)
- **API REST**: Backend Express.js con endpoints documentados
- **Responsive**: Diseño adaptativo con TailwindCSS

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js ≥ 20.11.0 < 21.0.0
- pnpm (gestor de paquetes requerido)
- PostgreSQL

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [repository-url]
   cd socios
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```
   *Esto ejecutará automáticamente la configuración inicial y las migraciones*

3. **Iniciar el servidor de desarrollo**
   ```bash
   pnpm dev
   ```

La aplicación estará disponible en `http://localhost:4200`

## 🛠 Comandos Disponibles

### Desarrollo
- `pnpm dev` - Servidor de desarrollo con hot reload
- `pnpm serve` - Ejecutar la aplicación construida con observación de archivos
- `pnpm build` - Construcción para producción
- `pnpm build:watch` - Construcción con observación de archivos

### Testing y Calidad
- `pnpm test` - Ejecutar todas las pruebas
- `pnpm test:watch` - Pruebas en modo observación
- `nx lint` - Ejecutar ESLint

### Base de Datos
- `pnpm create-migrations` - Generar nuevas migraciones
- `pnpm run-migrations` - Ejecutar migraciones en producción
- `pnpm run-migrations-dev` - Ejecutar migraciones en desarrollo

### Storybook
- `pnpm storybook` - Servidor de desarrollo Storybook (puerto 4400)
- `pnpm storybook:build` - Construcción de Storybook para producción

## 🏗 Arquitectura

### Stack Tecnológico
- **Frontend**: Angular 17, SCSS, TailwindCSS
- **Backend**: Express.js con TypeScript
- **Base de Datos**: PostgreSQL con Drizzle ORM
- **Autenticación**: Auth0
- **Build System**: NX workspace
- **Package Manager**: pnpm

### Estructura del Proyecto
```
src/
├── app/                    # Aplicación Angular
│   ├── pages/             # Componentes de páginas
│   ├── components/        # Componentes reutilizables
│   ├── guards/            # Guards de rutas
│   ├── providers/         # Servicios de Angular
│   └── interfaces/        # Interfaces TypeScript
├── api/                   # Backend Express.js
│   ├── routes.ts          # Definición de rutas API
│   ├── schemas/           # Esquemas de base de datos Drizzle
│   ├── user/              # Controladores por funcionalidad
│   └── _helpers/          # Utilidades y configuración
└── assets/               # Recursos estáticos
```

### API Endpoints

**Usuarios**
- `GET /api/user/:id` - Obtener usuario por ID
- `GET /api/user/email/:email` - Obtener usuario por email
- `POST /api/user` - Crear nuevo usuario

## 🗄 Base de Datos

### Esquema de Usuario
```sql
CREATE TABLE "user" (
    "id" serial PRIMARY KEY,
    "first_name" text,
    "last_name" text,
    "user_name" text,
    "email" text,
    "created_at" timestamp,
    "updated_at" timestamp,
    "enabled" boolean,
    "deleted" boolean
);
```

## 🌍 Variables de Entorno

El archivo `.env` se crea automáticamente durante la instalación. Configurar las siguientes variables:

- `DATABASE_URL` - String de conexión PostgreSQL
- `AUTH0_*` - Configuración Auth0
- `NODE_ENV` - Entorno de ejecución

## 📦 Construcción para Producción

```bash
pnpm build
pnpm start
```

Los archivos construidos se generan en `dist/socios/`

## 🧪 Testing

El proyecto incluye configuración para:
- **Jest** para pruebas unitarias
- **Cypress** para pruebas e2e
- **Testing Library** para pruebas de componentes Angular

## 📄 Licencia

Este proyecto está bajo licencia privada.

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama para la feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request
