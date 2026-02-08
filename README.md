# COMP2521 Discourse Setup

This repo contains a script for setting up the COMP2521 Discourse forum.

Currently, the script only creates and sets permissions for categories. Possible extensions include:

- Editing category descriptions
- Editing banner text when a user cannot create a topic in a category
- Configuring other settings

## How to Use

### 1. Install Dependencies

```
npm install
```

### 2. Configure Categories

Configure the categories in `src/data.ts` as needed.

### 3. Configure Environment

Copy the example environment file and configure it:

```
cp .env.example .env
```

The values for `COOKIE_HEADER` and `CSRF_TOKEN` can be obtained by inspecting requests in the Network tab while creating a new category on the forum.

### 4. Run Script

```
npm start
```
