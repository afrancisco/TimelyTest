import { dashboardElements } from '../4-elements/dashboardElement'

/**
 * @classdesc classe criada para implementar as funcionalidades relacionadas a login
 */
class DashPage {
  checkPageLoad=()=>{
      expect(cy.get(dashboardElements.dropdownCalendarMenu())).to.be.visible()
  }
}


export const dashPage = new DashPage()