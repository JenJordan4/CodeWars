// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

function declareWinner(fighter1, fighter2, firstAttacker) {

  let fighter1Turn = (fighter1.name == firstAttacker)
  
  while (fighter1.health >= 0 && fighter2.health >= 0) {
    if (fighter1Turn == true) {
      fighterAttacksFighter(fighter1, fighter2)
    } else {
      fighterAttacksFighter(fighter2, fighter1)
    }
    fighter1Turn = !fighter1Turn
  }
  
  return (fighter1.health > 0) ? fighter1.name : fighter2.name
}

function fighterAttacksFighter(attacker, victim) {
  victim.health -= attacker.damagePerAttack
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")