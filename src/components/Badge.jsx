import badges from '/src/data/badges.json'

export const Badge = (badgeArray) => {
  return badgeArray.map((badgeName) => {
    const badge = badges[badgeName]
    return (
      <a key={badgeName} href={badge.href} target="_blank" rel="noopener noreferrer" className={`badge ${badge.className}`}>
        {badge.text}
      </a>
    )
  })
}
