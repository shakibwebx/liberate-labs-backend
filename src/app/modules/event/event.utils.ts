export function categorizeEvent(
  title: string,
  notes?: string,
): 'Work' | 'Personal' | 'Other' {
  const workKeywords = [
    'meeting',
    'project',
    'client',
    'deadline',
    'presentation',
  ];
  const personalKeywords = [
    'birthday',
    'family',
    'home',
    'party',
    'anniversary',
  ];

  const combinedText = (title + ' ' + (notes || '')).toLowerCase();

  if (workKeywords.some((word) => combinedText.includes(word))) return 'Work';
  if (personalKeywords.some((word) => combinedText.includes(word)))
    return 'Personal';

  return 'Other';
}

export function isValidDate(dateStr: string): boolean {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

export function isValidTime(timeStr: string): boolean {
  return /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(timeStr);
}
