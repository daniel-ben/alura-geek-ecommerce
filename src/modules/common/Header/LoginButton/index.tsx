import { useRouter } from "next/router";
import { StyledButton } from "./styles";
import { LoginButtonProps } from "./types";

export default function LoginButton({ searchBarDisplay }: LoginButtonProps) {
  const router = useRouter();
  const handleClick = () => router.push('/login');

  return (
    <StyledButton 
      onClick={handleClick} 
      searchBarDisplay={searchBarDisplay}
      >Login
    </StyledButton>
  )
}