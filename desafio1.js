function converterHorario(horario) {
  const partesHora = horario.split(":");

  let hora = parseInt(partesHora[0]);
  const minuto = parseInt(partesHora[1]);
  const segundo = parseInt(partesHora[2].substring(0, 2));
  const periodo = partesHora[2].substring(2);

  periodo === "PM" && hora !== 12 ? (hora += 12) : (hora = 0);

  return (horarioModificado = `${hora}:${minuto}:${segundo}`);
}

const horario = "06:15:25PM";
console.log(converterHorario(horario));
