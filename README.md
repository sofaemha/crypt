# Table of Contents

> [!NOTE]\
> See [changelog](changelog.md) to find all important changes made to this project

- [Table of Contents](#table-of-contents)
- [Crypt](#crypt)
  - [Getting Started](#getting-started)
    - [Pre-Requirements](#pre-requirements)
      - [Next.js](#nextjs)
      - [Supabase](#supabase)
    - [Downloading Resources](#downloading-resources)
    - [Running in Local Server](#running-in-local-server)
      - [Automatically](#automatically)
      - [Manually](#manually)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)
- [Documentation](#documentation)

---

# Crypt

Anonymous messenger similar to <a class="underline decoration-dotted" href="https://secreto.site/">secreto</a>. This application uses the <a class="underline decoration-dotted" href="https://nextjs.org">NextJS (TypeScript)</a> framework which is supported by the <a class="underline decoration-dotted" href= "https://supabase.io/">Supabase</a> database. This project is an improvisation of the <a href="https://github.com/sofaemha/rahasia"><code>@sofaemha/rahasia</code></a> project inspired by <a href="https:/ /github.com/sooluh/secret"><code>@sooluh/secret</code></a>, and original from <a href="https://github.com/Reynadi531/secret-message"><code>@Reynadi531/secret-message</code></a>.

## Getting Started

### Pre-Requirements

#### Next.js

- [Node.js 16.14]("https://nodejs.org/en") or later.
- macOS, Windows (including WSL), and Linux are supported.

#### Supabase

> [!WARNING]\
> You need to create account first, the easiest way is sign-in using github account. Then create a new database project, copy code below into integrated terminal, and done.

Query to create table heart :

```sql
CREATE TABLE heart (
  id BIGINT GENERATED ALWAYS AS IDENTITY NOT NULL,
  ip TEXT DEFAULT '' NOT NULL,
  parent BIGINT NULL,
  created TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
  PRIMARY KEY (id),
);
```

Query to create table messages :

```sql
CREATE TABLE messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY NOT NULL,
  message TEXT DEFAULT '' NOT NULL,
  owner BOOL DEFAULT FALSE NOT NULL,
  active BOOL DEFAULT TRUE NOT NULL,
  parent BIGINT NULL,
  created TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  deleted TIMESTAMP WITH TIME ZONE DEFAULT NULL NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (parent) REFERENCES messages (id)
);
```

### Downloading Resources

Clone the GitHub repository using git :

```bash
# HTTPS
git clone https://github.com/sofaemha/sofaemha.git
```

```bash
# SSH
git clone git@github.com:sofaemha/rahasia.git
```

```bash
# GitHub CLI
gh repo clone sofaemha/rahasia
```

> Or directly download the zip file from GitHub : [master.zip]("https://github.com/sofaemha/sofaemha/archive/refs/heads/master.zip")

Install all dependencies using NPM :

```bash
npm install
```

### Running in Local Server

#### Automatically

I have created a shortcut command to run a development server :

```bash
sh run
```

> If you use the command above, your browser will automatically open and display the results, as long as the focus is on the window.

See the [run](run) file for further customization.

#### Manually

In the [package](package.json) file there are several commands that can be run, including :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

> If using the above command, you need to open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out their [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

# Documentation
