import { Community } from "@/atoms/CommunitesAtom";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import safeJsonStringify from "safe-json-stringify";

type communityPageProps = {
  communityData: Community;
};

const CommunityPage = ({ communityData }: communityPageProps) => {
  return <div>Welcome to {communityData.id}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocref = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocref);
    return {
      props: {
        communityData: JSON.parse(
          safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
        ),
      },
    };
  } catch (error) {
    console.log(" getServerSideProps error", error);
  }
}

export default CommunityPage;
