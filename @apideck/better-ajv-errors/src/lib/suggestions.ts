import leven from 'leven';

export const getSuggestion = ({
  value,
  suggestions,
  format = (suggestion) => `Did you mean '${suggestion}'?`,
}: {
  value: string;
  suggestions: string[];
  format?: (suggestion: string) => string;
}): string => {
  const bestSuggestion = suggestions.reduce(
    (best, current) => {
      const distance = leven(value, current);
      if (best.distance > distance) {
        return { value: current, distance };
      }

      return best;
    },
    {
      distance: Infinity,
      value: '',
    }
  );

  return bestSuggestion.distance < value.length ? format(bestSuggestion.value) : '';
};
