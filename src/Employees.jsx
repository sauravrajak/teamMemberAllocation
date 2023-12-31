import femaleProfile from './assets/femaleProfile.jpg'
import maleProfile from './assets/maleProfile.jpg'

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-5'>
          <select
            name=''
            id=''
            className='form-select form-select-lg'
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
          </select>
        </div>
      </div>

      <div className='row justify-content-center '>
        <div className='col-8'>
          <div className='card-collection'>
            {employees.map((employee) => (
              <div
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? 'card m-2 standout '
                    : 'card m-2 '
                }
                style={{ cursor: 'pointer' }}
                onClick={handleEmployeeCardClick}
              >
                <img
                  src={employee.gender === 'male' ? maleProfile : femaleProfile}
                  alt='picture'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Full Name :{employee.fullName}</h5>
                  <p>
                    <b>Designation : </b>
                    {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees
