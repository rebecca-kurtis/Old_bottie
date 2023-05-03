export default function prompt(recipientFName, userFName, relationship, prose, occasion, theme, mood) {
  const capitalizedRecipient = recipientFName[0].toUpperCase() + recipientFName.slice(1).toLowerCase();
  const capitalizedUser = userFName[0].toUpperCase() + userFName.slice(1).toLowerCase();
  return `Pretend you are a hallmark card writer and create a card for the following:

  For: ${capitalizedRecipient}
  From: ${capitalizedUser}
  Relationship: ${relationship}
  Occasion: ${occasion}
  Theme: ${theme}
  Mood: ${mood}
  Prose: ${prose}`;

};