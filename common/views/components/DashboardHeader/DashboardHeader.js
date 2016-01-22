import React, { PropTypes } from 'react'

import { DashboardPicker,
         GlobalInput,
         User } from '../../'

export const DashboardHeader = (
  { dashboards,
    addDashboard,
    addList,
    addResource,
    setCurrentDashboard,
    inputTypes,
    setCurrentInputType,
    currentList,
    listsById,
    user,
    logoutUser }) =>
(
  <div>
    <User
      { ...user }
      logoutUser={ logoutUser } />
    <DashboardPicker
      { ...dashboards }
      setCurrentDashboard={ setCurrentDashboard } />
    <GlobalInput
      { ...inputTypes }
      addDashboard={ addDashboard }
      addList={ addList }
      addResource={ addResource }
      currentDashboard={ dashboards.currentDashboard }
      currentList={ currentList }
      listsById={ listsById }
      setCurrentInputType={ setCurrentInputType }
      userId={ user ? user.id : '' } />
  </div>
)

DashboardHeader.propTypes = {
  dashboards: PropTypes.object.isRequired,
  setCurrentDashboard: PropTypes.func.isRequired,
  inputTypes: PropTypes.object.isRequired,
  addDashboard: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,
  addResource: PropTypes.func.isRequired,
  setCurrentInputType: PropTypes.func.isRequired,
  currentList: PropTypes.string.isRequired,
  listsById: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}
