import { css } from '@emotion/react'
import SettingsIcon from '@mui/icons-material/Settings'

const styles = {
  settingIcon: css`
    font-size: 2rem;
    color: white;
  `,
}

const SettingBtn = () => {
  return (
    <div>
      <SettingsIcon css={styles.settingIcon}/>
    </div>
  )
}

export default SettingBtn
