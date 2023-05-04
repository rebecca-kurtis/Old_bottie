const prompt = function (relationship, proseStyle, occasion, theme, mood) {
  return `Pretend you are a hallmark card writer and create a card(only the inside) from me for the following:

  Relationship: ${relationship}
  Occasion: ${occasion}
  Theme: ${theme}
  Mood: ${mood}
  Prose: ${proseStyle}
  
  Do not include the closing or the salutation.
  `;

};
module.exports = { prompt };