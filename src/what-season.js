module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== "[object Date]") 
    throw new Error('THROWN');
    switch (date.getMonth()){
      case 11:
        case 0:
          case 1:
        return 'winter';
      break;
      case 2:
        case 3:
          case 4:
            return 'spring';
          break;
          case 5:
            case 6:
              case 7:
                return 'summer';
              break;
              case 8:
                case 9:
                  case 10:
                    return '/autumn|fall/';
                    break;
                    default:
    }
    }
    /*if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    return 'winter';
  } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
    return 'spring';
  } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
    return 'summer';
  } else if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
    return '/autumn|fall/';
  } 
};*/