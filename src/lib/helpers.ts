// src/lib/helpers.ts

export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInArgentina(): Date {
  const now = new Date();
  const offsetArgentina = -3; // Ajusta según la zona horaria específica y horario de verano
  now.setHours(now.getUTCHours() + offsetArgentina);
  return now;
}

export function formatTimeForArgentina(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
    // Agrega opciones adicionales si es necesario
  };
  return date.toLocaleTimeString('es-AR', options);
}
