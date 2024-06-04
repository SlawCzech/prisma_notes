# Prisma notes

## Commands
```bash
# inicjalizacja konfiguracji projektu prisma
npx prisma init --datasource-provider postgresql

# stworzenie modeli na podstawie istniejącej struktury db
npx prisma db pull   

# reset do pustej bazy
npx prisma db push --force-reset

# wprowadzanie zmian do schemy w db
npx prisma migrate dev --name <init>

# GUI for dc
npx prisma studio
```


## CRUD

```typescript

// Create one

await prisma.<model_name>.create({
    data: {
        <column_name>: "<value>",
    }
});

// Read many

await prisma.<model_name>.findMany();

```


## Models (db tables)

```prisma
model <Table_Name> {
  id          Int             @id @default(autoincrement())
  name        String
  email       String
  isAdmin     Boolean
  preferences Json
  avatar      Unsupported("")  // any
}

model <Table_Name> {
  id        String   @id @default(uuid())
  rating    Decimal
  createdAt DateTime
  updatedAt DateTime
}

```


## Table relations

```prisma


```