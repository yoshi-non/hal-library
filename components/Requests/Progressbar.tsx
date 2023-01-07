import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TextsmsIcon from '@mui/icons-material/Textsms';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const Progressbar = () => {
  return (
    <div>
      <div>
        <div>
          <AccountCircleIcon/>
          <p>プロフィール</p>
        </div>

        <div>
          <AutoStoriesIcon/>
          <p>書籍情報</p>
        </div>

        <div>
          <TextsmsIcon/>
          <p>リクエスト理由</p>
        </div>

        <div>
          <DownloadDoneIcon/>
          <p>ダウンロード</p>
        </div>
      </div>
    </div>
  )
}

export default Progressbar
