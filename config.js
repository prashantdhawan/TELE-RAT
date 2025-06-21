const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7667398508:AAGNwkV9ZORCT8Q9Lz0u8P-inhySfZH6zzw',
  id: isNaN(parsedId) ? 6256256850 : parsedId // replace 12345.. with your telegram chat id
};
