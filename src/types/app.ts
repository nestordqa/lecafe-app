import { UserProfile } from "./common";

export type RootStackParamList = {
  InfoModal: { 
    profile: UserProfile, 
    navigation: any, 
    onGoBackFunction: VoidFunction,
    onDislike: VoidFunction;
    onLike: VoidFunction;
    onSuperLike: VoidFunction;
  };
  MatchModal: {
    profile: UserProfile,
    navigation: any,
  },
  Cards: { mode: 'friendship' | 'relationship' | 'dating' };
};