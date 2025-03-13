
export const getColorClass = (color: string): string => {
  const colorMap: Record<string, string> = {
    'blue': 'bg-blue-500 border-blue-600',
    'purple': 'bg-purple-500 border-purple-600',
    'green': 'bg-green-500 border-green-600',
    'orange': 'bg-orange-500 border-orange-600',
    'red': 'bg-red-500 border-red-600',
    'indigo': 'bg-indigo-500 border-indigo-600',
  };
  
  return colorMap[color] || 'bg-gray-500 border-gray-600';
};
