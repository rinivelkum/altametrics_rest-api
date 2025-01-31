import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanDatabase() {
  await prisma.invoice.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('Cleaned up database');
}

async function main() {
  await cleanDatabase();

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'password1',
      name: 'John Doe',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: 'password2',
      name: 'Jane Smith',
    },
  });

  console.log('Created users');

  // Create invoices with current dates
  const today = new Date();
  const thirtyDaysFromNow = new Date(today.setDate(today.getDate() + 30));
  const sixtyDaysFromNow = new Date(today.setDate(today.getDate() + 60));

  await prisma.invoice.create({
    data: {
      vendor_name: 'Office Supplies Co.',
      amount: 458.99,
      due_date: thirtyDaysFromNow,
      description: 'Monthly office supplies',
      user_id: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      vendor_name: 'Tech Solutions Inc.',
      amount: 1299.99,
      due_date: sixtyDaysFromNow,
      description: 'Software licenses - Q1 2054',
      user_id: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      vendor_name: 'Marketing Services Ltd.',
      amount: 2500.0,
      due_date: thirtyDaysFromNow,
      description: 'Q1 Marketing Campaign',
      user_id: user2.id,
    },
  });

  console.log('Created invoices');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Seed completed');
  });
