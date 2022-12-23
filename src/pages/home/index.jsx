import Chats from 'src/components/common/Chats';
import Information from 'src/components/common/Information';
import Input from 'src/components/common/Input';

function Home() {
  return (
    <div className="home">
      <Information />
      <Chats />
      <Input />
    </div>
  );
}
export default Home;
