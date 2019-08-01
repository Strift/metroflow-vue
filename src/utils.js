export function statusToArrivalTime (status) {
  switch (status) {
    case 'Train a quai':
      return 0
    case 'Train a l\'approche':
      return 0.5
    default:
      // Because syntax is usually 'X mn' so we want to get the X value
      return Number(status.split(' ')[0])
  }
}
