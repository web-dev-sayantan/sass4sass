import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);

export const userTable = pgTable("user", {
  id: text()
    .primaryKey()
    .notNull()
    .$defaultFn(() => createId()),
  name: text().notNull(),
  email: text().notNull(),
  emailVerified: boolean().notNull().default(false),
  image: text(),
  role: userRoleEnum().notNull().default("user"),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const sessionTable = pgTable("session", {
  id: text()
    .primaryKey()
    .notNull()
    .$defaultFn(() => createId()),
  userId: text()
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expiresAt: timestamp().notNull(),
  ipAddress: text(),
  userAgent: text(),
});

export const accountTable = pgTable("account", {
  id: text()
    .primaryKey()
    .notNull()
    .$defaultFn(() => createId()),
  userId: text()
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  accountId: text().notNull(),
  providerId: text().notNull(),
  accessToken: text(),
  refreshToken: text(),
  expiresAt: timestamp(),
  password: text(),
});

export const verificationTable = pgTable("verification", {
  id: text()
    .primaryKey()
    .notNull()
    .$defaultFn(() => createId()),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp(),
});

export const passkeyTable = pgTable("passkey", {
  id: text()
    .primaryKey()
    .notNull()
    .$defaultFn(() => createId()),
  name: text(),
  publicKey: text().notNull(),
  userId: text()
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  WebAuthnUserId: text(),
  counter: integer().notNull().default(0),
  deviceType: text().notNull(),
  backedUp: boolean().notNull().default(false),
  transports: text().notNull(),
  key: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});
