export function mapRolesToPretty(profile) {
  switch (profile) {
    case 'Admin':
      return 'Administrador';
    case 'User':
      return 'Usuario';
    default:
      return profile;
  }
}

