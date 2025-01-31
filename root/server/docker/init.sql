DO $$ 
BEGIN
    IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'altametrics') THEN
        CREATE DATABASE altametrics;
    END IF;
END
$$;

\c altametrics;

CREATE TABLE IF NOT EXISTS "User" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     -- Soft delete column so we can keep track of deleted users and invoices
    -- Alternative would be to store user data in the "Invoice" table
    -- Not present in the test requierements, it is my personal preference
    deleted_at TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS "Invoice" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vendor_name VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    due_date DATE NOT NULL,
    description TEXT,
    user_id UUID,
    paid BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "User"(id)
);

CREATE INDEX invoice_user_id_idx ON "Invoice"(user_id);
CREATE INDEX user_email_idx ON "User"(email);